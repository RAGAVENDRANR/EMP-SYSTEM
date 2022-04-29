import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>):any{
    const { url, method, headers, body } = request;

     return console.log("Interceptor reached"),handleRoute();
    
    function handleRoute() {
        
        switch (true) {
            case url.endsWith('/users') && method === 'GET':
                return getUsers();
            case url.match(/\/users\/\d+$/) && method === 'GET':
                return getUserById();
            case url.endsWith('/users') && method === 'POST':
                return createUser();
            case url.match(/\/users\/\d+$/) && method === 'PUT':
                return updateUser();
            case url.match(/\/users\/\d+$/) && method === 'DELETE':
                return deleteUser();
            default:
                // pass through any requests not handled above
                return alert("No source")
        } 
         
    } 
    function getUsers() {
        throw new Error('Function not implemented.');
    }
    function getUserById() {
        throw new Error('Function not implemented.');
    }
    
    function createUser() {
        throw new Error('Function not implemented.');
    }
    
    function updateUser() {
        throw new Error('Function not implemented.');
    }
    
    function deleteUser() {
        throw new Error('Function not implemented.');
    } 
}
}

