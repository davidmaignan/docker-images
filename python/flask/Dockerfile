FROM python:3.11.0-slim-bullseye

# Environment vars
ENV USER=david
ENV DIR=/app
ENV PATH="/home/${USER}/.local/bin:$PATH"
ENV PORT=5000

RUN apt-get update && \
    addgroup --system ${USER} \
    && adduser --system --group ${USER}

# User
USER ${USER}

RUN python -m pip install --upgrade pip

WORKDIR ${DIR}

COPY app/ .

RUN pip install -r requirements.txt


EXPOSE 5000

CMD ["gunicorn", "-w", "4", "app:app"]
