# ---- Build Stage ----
FROM maven:3.9.9-eclipse-temurin-17 AS builder
WORKDIR /app

# Copy only necessary files
COPY pom.xml .
COPY src ./src

# Build the app (skip tests to speed up)
RUN mvn clean package -DskipTests

# ---- Run Stage ----
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the built jar from previous stage
COPY --from=builder /app/target/*.jar app.jar

# Expose port 8080 (Render detects this automatically)
EXPOSE 8080

# Run the app
ENTRYPOINT ["java","-jar","app.jar"]
