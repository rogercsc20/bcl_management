FROM python:3.12
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .
EXPOSE 5000
ENV PYTHONPATH=/app
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "run:app"]
