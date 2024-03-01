package com.project.project.Exception;

import java.time.LocalDateTime;

public class ExceptionResponse {
   
    private LocalDateTime exceptionTime;
    private String exceptionMessage;
    private String requestDescription;
    public ExceptionResponse() {
    }
    public ExceptionResponse( String exceptionMessage, String requestDescription) {
   this.exceptionTime = LocalDateTime.now();
        this.exceptionMessage = exceptionMessage;
        this.requestDescription = requestDescription;
    }
   
    public String getExceptionMessage() {
        return exceptionMessage;
    }
    public String getRequestDescription() {
        return requestDescription;
    }
    public LocalDateTime getExceptionTime() {
        return exceptionTime;
    }
    
}
