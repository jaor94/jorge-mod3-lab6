import { Given, Then, When } from '@cucumber/cucumber';

Given('the Maker has chosen a word', function () {
        console.log('Step 1');        
});



When('the Breaker makes a guess', function () {
    console.log('Step 2');
});


Then('the Maker is asked to score', function () {
    console.log('Step 3');
});