"""This code is licensed under the GPL-3.0 license
Written by masajinobe-ef
"""

from contextlib import asynccontextmanager

from api.routers.artist.router import router as router_artist

# Routers depends
from api.routers.auth.router import router as router_auth
from api.routers.blog.router import router as router_blog
from api.routers.custom.router import router as router_custom
from api.routers.tasks.router import router as router_tasks

# Config
from config import REDIS_HOST, REDIS_PORT

# FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# FastAPI Cache
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend

# Loguru
from logger import logger

# Redis
from redis import asyncio as aioredis


# Startup events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # FastAPI
    try:
        logger.info('❕FastAPI успешно запущен.')
    except Exception as e:
        logger.error(f'❌ FastAPI ошибка: {e}')

    # Redis
    try:
        redis = aioredis.from_url(
            f'redis://{REDIS_HOST}:{REDIS_PORT}',
            encoding='utf8',
            decode_responses=True,
        )
        FastAPICache.init(RedisBackend(redis), prefix='fastapi-cache')
        logger.info('❕Redis успешно запущен.')

    except Exception as e:
        logger.error(f'❌ Redis ошибка: {e}')

    yield


# FastAPI initialize
app = FastAPI(
    lifespan=lifespan,
    title='Priscilla FX',
    # docs_url=None, # TODO Вынести параметры в settings.yaml + ECHO_DB
    # openapi_url=None,
    redoc_url=None,
)

# Routers
app.include_router(router_auth)
app.include_router(router_blog)
app.include_router(router_custom)
app.include_router(router_artist)
app.include_router(router_tasks)


# Mount static files
app.mount('/static', StaticFiles(directory='static'), name='static')


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://localhost:50160',  # Next.js local port
        #'http://localhost', Будущий VDS ip
    ],
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH', 'PUT'],
    allow_headers=[
        'Content-Type',
        'Set-Cookie',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin',
        'Authorization',
    ],
)

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(
        app, host='localhost', port=50150, log_level='info', lifespan='on'
    )
