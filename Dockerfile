FROM python:3.12
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .
EXPOSE 5000
ENV PYTHONPATH=/app
ENV FLASK_APP=run.py
ENV FLASK_ENV=development

CMD ["flask", "run", "--host=0.0.0.0"]