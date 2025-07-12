FROM debian

WORKDIR /backend

COPY . /backend/

RUN apt update && apt upgrade -y && apt install -y python3 python3-pip python3-venv

RUN pip3 install uv --break-system-packages && uv sync

RUN uv run manage.py makemigrations
RUN uv run manage.py migrate
RUN uv run manage.py makemigrations --noinput

# CMD [ "uv", "run", "gunicorn", "--bind", "0.0.0.0:8000", "AboutSite.wsgi" ]
