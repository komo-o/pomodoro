FROM golang:1.24.2-alpine

WORKDIR /app

RUN apk add --no-cache git

RUN go install github.com/air-verse/air@latest

# あとでgo.sumを追加する
COPY go.mod ./

RUN go mod download

COPY . .

EXPOSE 8080

CMD ["air"]
