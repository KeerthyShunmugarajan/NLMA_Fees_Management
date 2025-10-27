package com.feemanagement.demoFees.config;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        //String frontendUrl = System.getenv("FRONTEND_URL");
        registry.addMapping("/**")  // all API endpoints
                .allowedOrigins( "http://localhost:3000","http://nlma-fee-front.vercel.app/")  // replace with your Vercel URL
                .allowedMethods("*")// allow GET, POST, PUT, DELETE, etc.
                .allowCredentials(true)
                .allowedHeaders("*");
    }
}