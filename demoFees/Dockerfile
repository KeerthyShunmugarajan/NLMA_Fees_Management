# ---- Build Stage ----
FROM maven:3.9.9-eclipse-temurin-17 AS builder
WORKDIR /app

COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# ---- Run Stage ----
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy built jar
COPY --from=builder /app/target/*.jar app.jar

# Copy H2 database
COPY data ./data

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
