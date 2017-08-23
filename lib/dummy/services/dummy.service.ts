import { Component } from '@nestjs/common';

@Component()
export class DummyService {

    public getDummyMsg() {
        console.log("DummyService > getDummyMsg");
        return 'this is a dummy message!';
    }
}
