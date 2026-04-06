# Stage 1: Build the application
FROM eclipse-temurin:21-jdk-jammy AS build
WORKDIR /app

# Copy the wrapper and pom.xml first to download dependencies
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download all required dependencies into one layer
RUN ./mvnw dependency:go-offline -B

# Copy the actual project source code and build it
COPY src src
RUN ./mvnw package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the built jar file from the previous stage
COPY --from=build /app/target/api-0.0.1-SNAPSHOT.jar app.jar

# Run the jar with memory limits suited for the 512MB free tier
ENTRYPOINT ["java", "-Xmx300m", "-Xss512k", "-jar", "app.jar"]
