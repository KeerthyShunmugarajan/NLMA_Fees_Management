package com.feemanagement.demoFees.config;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // all API endpoints
                .allowedOrigins("http://nlma-fee-front.vercel.app/")  // replace with your Vercel URL
                .allowedMethods("*")// allow GET, POST, PUT, DELETE, etc.
                .allowCredentials(true)
                .allowedHeaders("*");
    }
}