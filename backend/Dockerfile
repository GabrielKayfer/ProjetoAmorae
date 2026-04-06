# Estágio de build
FROM eclipse-temurin:21-jdk-jammy AS builder
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
# Faz o download das dependências para cache
RUN ./mvnw dependency:go-offline

COPY src ./src
# Compila e empacota a aplicação
RUN ./mvnw clean package -DskipTests

# Estágio de execução
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copia o JAR gerado do estágio de build
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

# Restrições de memória de acordo com os requisitos (Render free tier = 512MB)
ENTRYPOINT ["java", "-Xmx300m", "-Xss512k", "-jar", "app.jar"]
