/**
 * This page class contains all the webelemnts of Dashboard Page 
 */
var helper = require('protractor-helper');
var reporter=require('../Common/Reporter.js');
var EC = protractor.ExpectedConditions;

var dashboardPage=require('../Guest Services/DashboardPage.js');


var Pdriver = function () {

    this.clickElementByJavaScript=function(bylocator){
        browser.executeScript('arguments[0].click();', element(bylocator));

    }
    this.clickElementJavaScript=function(elem){
        browser.executeScript('arguments[0].click();', elem);

    }
    this.clickElementBy = function (bylocator) {
       
        this.waitForElementPresenceBy(bylocator,30);
        this.waitForElementClickableBy(bylocator,30);
        element(bylocator).click();
        /*
        browser.wait(EC.elementToBeClickable(element(bylocator)),60000,
        allure.createStep('Object Issue-Unable to click on Element ', function () {

        throw new Error('Unable to click on title element');
        })()).then(function(flag){
            var ele=this.getElement(bylocator);
        

            ele.click();
        });
        */
    }
    this.clickElement = function (element) {
        this.waitForElementClickable(element,30);
        element.click();
    }

    this.getElementText = function (element) {

       
        this.waitForElementPresence(element,30);
        return Promise.resolve(element.getText().then(function(actualtext){
            return actualtext;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
    }
    this.getElementTextBy = function (bylocator) {
        this.waitForElementPresenceBy(bylocator,30);
        return Promise.resolve(element(bylocator).getText().then(function(actualtext){
            return actualtext;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
    }
    
    this.getElementAttriute = function (element,attributename) {
        return Promise.resolve(element.getAttribute(attributename).then(function(attbval){

            return attbval;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
    }
    this.getElementAttriuteBy = function (bylocator,attributename) {
        this.waitForElementPresenceBy(bylocator,30);
        return Promise.resolve(element(bylocator).getAttribute(attributename).then(function(attbval){

            return attbval;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
    }
    this.getElement=function(bylocator){
        this.waitForElementPresenceBy(bylocator,30);
        return Promise.resolve(element(bylocator).then(function(el){
            return el;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
        /*
        browser.wait(EC.visibilityOf(element(bylocator)),60000,
            allure.createStep('Object Issue-Unable to find element ', function () {

            throw new Error('Unable to find element');

        })()).then(function(flag){
            return element(bylocator);
        });

       */

    }
    this.waitForElementDisappearBy=function(by,timeout){
        return Promise.resolve(browser.wait(EC.invisibilityOf(element(by)), timeout*1000).then(function(flg){
            console.log('Object not Visible');
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){


            console.log('Object Issue- Object is visible '+by);

            reporter.addFailStepObjectIssue('Xpath '+by +' Error :'+error);
            //expect(true).toBe(false);
            
            //allure.createStep('Object Issue- Object is visible '+by,function(){})();
            
           }));
        //,this.addStepInAllureReport('Object Issue- Object is visible '+by)).then(function(flg){

           // console.log('Flag values ' +flg);
       // });
    }
    this.waitForElementPresence=function(elem,timeout){
        return Promise.resolve(browser.wait(EC.presenceOf(elem), timeout*1000).then(function(flg){
            console.log('Element  Present ');
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){

            console.log('Object Issue- Elemenet is not visible');
            reporter.addFailStepObjectIssue('Element '+elem +' Error :'+error);
            //expect(true).toBe(false);
            
            //allure.createStep('Object Issue- Elemenet is not visible',function(){})();
            
           }));
        //, this.addStepInAllureReport('Object Issue- Elemenet is not visible'));
    }
    this.waitForElementClickable=function(elem,timeout){   
        return Promise.resolve(browser.wait(EC.elementToBeClickable(elem), timeout*1000).then(function(flg){
            console.log('Element  Present ');
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){
            console.log('Object Issue- Elemenet is not  Clickable');
            reporter.addFailStepObjectIssue('Elem '+elem +' Error :'+error);
            //expect(true).toBe(false);
            
            //allure.createStep('Object Issue- Elemenet is not  Clickable',function(){})();
            
           }));//,this.addStepInAllureReport('Object Issue- Elemenet is not  Clickable'));
    }

    this.waitForElementDisappear=function(elem,timeout){   
        return Promise.resolve(browser.wait(EC.invisibilityOf(elem), timeout*1000).then(function(flg){
            console.log('Object  Present '+by);
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){
            console.log('Object Issue- Elemenet is  visible');
            reporter.addFailStepObjectIssue('Element '+elem +' Error :'+error);
            //expect(true).toBe(false);
            
            //allure.createStep('Object Issue- Elemenet is  visible',function(){})();
            
           }));
           //,this.addStepInAllureReport('Object Issue- Elemenet is  visible'));
    }
    
    this.waitForElementPresenceBy=function(by,timeout){
      /*
        browser.wait(EC.presenceOf(element(by)), timeout*1000,this.addStepInAllureReport('Object Issue- Object is not present '+by)).then(function(flg){

            console.log('Flag values ' +flg);
        });
        */
       return Promise.resolve(browser.wait(EC.visibilityOf(element(by)), timeout*1000).
       then(function(flg){
        console.log('Object  Present '+by);
        return flg;
            //allure.createStep('Object Issue- Object is not present '+by,function(){})();

       },function(error){
        console.log('Object not Present '+by);
        reporter.addFailStepObjectIssue('Xpath '+by +' Error :'+error);
        //expect(true).toBe(false);
        
        //allure.createStep('Object Issue- Object is not present ::'+error,function(){})();
        //expect(true).toBe(false);
       }));
       
       
       
    }
    this.waitForElementClickableBy=function(by,timeout){ 
        return Promise.resolve(browser.wait(EC.elementToBeClickable(element(by)), timeout*1000).then(function(flg){
            console.log('Object  Clickable'+by);
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){
            console.log('Object Issue- Object is not clickable '+by);
            reporter.addFailStepObjectIssue('Xpath '+by +' Error :'+error);
            //expect(true).toBe(false);
            //allure.createStep('Object Issue- Object is not clickable '+by,function(){})();
            
           }));
        //,this.addStepInAllureReport('Object Issue- Object is not clickable '+by));
    }
   
    //Need to inderstand this to ad reporting
    this.selectDropdownByIndex=function(string,index){
        var objectIdentifier=by.xpath(string);
        element(objectIdentifier).click();
        var indexString=string+"/../..//li["+index+"]";
        var elementClickable=by.xpath(indexString);
        element(elementClickable).click();
    }

   
     this.isDisplayedBy=function(bylocator){
        //in this tell user which //bylocator
        //this.waitForElementPresenceBy(bylocator,30);
        
      
        return Promise.resolve(
            element(bylocator).isDisplayed().then(function(flg){
            console.log('Element isDisplayed '+bylocator+' --'+flg)
            return flg;

        },function(error){
            //reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
            console.log('Error '+error)
            return false;

        }));
       
    }
    this.isDisplayed=function(elem){
        this.waitForElementPresence(elem,30);
        return Promise.resolve(element(elem).isDisplayed().then(function(flg){

            return flg;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
    }
    
    this.waitForLoadinScreenToDisappear=function(){        
        return Promise.resolve(browser.wait(EC.invisibilityOf(element(by.className("loader-image"))), 20000).then(function(flg){
            console.log('Loading screen is not visible');
            return true;
                //allure.createStep('Object Issue- Object is not present '+by,function(){})();
    
           },function(error){
            console.log('Object Issue- Loading scren is still visible');
            //reporter.addFailStepObjectIssue('Loading Screen'+error);
            //expect(true).toBe(false);
            
            //allure.createStep('Object Issue- Loading scren is still visible',function(){})();
            
           }));
        //,this.addStepInAllureReport('Object Issue- Loading scren is still visible'));       
    }
    this.waitForLoadinScreenToDisappearTimeout=function(timeout){
        
        //this.waitForElementDisappear(dashboardPage.pageLoadSpinner(),10000);
        //var until = protractor.ExpectedConditions;
        if(timeout>3){
            browser.sleep(3*1000);
            return Promise.resolve(browser.wait(EC.invisibilityOf(element(by.className("loader-image"))), (timeout-3)*1000).then(function(flg){
                console.log('Loading screen is not visible');
                return true;
                    //allure.createStep('Object Issue- Object is not present '+by,function(){})();
        
               },function(error){
                console.log('Object Issue- Loading scren is still visible');
                //reporter.addFailStepObjectIssue(error);
                //expect(true).toBe(false);
                //allure.createStep('Object Issue- Loading scren is still visible',function(){})();
                
               }));
            //,this.addStepInAllureReport('Object Issue- Loading scren is still visible'));
        }else{

            return Promise.resolve(browser.wait(EC.invisibilityOf(element(by.className("loader-image"))), timeout*1000).then(function(flg){
                console.log('Loading screen is not visible');
                return true;
                    //allure.createStep('Object Issue- Object is not present '+by,function(){})();
        
               },function(error){
                console.log('Object Issue- Loading scren is still visible');
                //reporter.addFailStepObjectIssue(error);
                //expect(true).toBe(false);
                
                //allure.createStep('Object Issue- Loading scren is still visible',function(){})();
                
               }));
            //,this.addStepInAllureReport('Object Issue- Loading scren is still visible'));
        }
             
       
    }
/*
    this.getElementText=function(bylocator){
        this.waitForElementPresenceBy(bylocator,30);
        var textElement=element(bylocator);
        expect(textElement.getText());
    }
    */


    this.waitForSomeTime=function(timeout){
        browser.sleep(timeout*1000)
        

    }
    this.getAllElementsBy=function(bylocator){
        console.log("it is called by this");
        this.waitForElementPresenceBy(bylocator,30);
        return Promise.resolve(element.all(bylocator).then(function(list){
            return list;
        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);
        }));
         

    }
    this.enterTextOnElement=function(bylocator,text){
        this.waitForElementPresenceBy(bylocator,30);
        element(bylocator).clear();
        element(bylocator).sendKeys(text);

    }

    this.enterTextAndEnter=function(bylocator,text){
        this.waitForElementPresenceBy(bylocator,30);
        element(bylocator).sendKeys(text,protractor.Key.Enter);

    }

    
    this.clearTextElement = function(element){ 
        this.waitForElementPresence(element,30);
        element.clear();
        
    }

    this.clearTextElementBy = function(bylocator){ 
        this.waitForElementPresenceBy(bylocator,30);
        element(bylocator).clear();
        
    }

    this.cancelButton = function(bylocator){
        this.waitForElementPresenceBy(bylocator,30);
        element(bylocator).click();
    }
    this.NApressEnter=function(){
        browser.actions().sendKeys(protractor.key.Enter).perform();

    }
    this.pressTABOnElementBBy=function(bylocator){
        this.waitForElementPresenceBy(bylocator,30);
        element(bylocator).sendKeys(protractor.Key.TAB);
    }
    this.pressTABOnElement=function(el){
        this.waitForElementPresence(el,30);
        el.sendKeys(protractor.Key.TAB);
    }
    this.pressTABBy=function(by){

    }
    /*
    this.CheckIfElementExistBy=function(bylocator){
        this.waitForElementPresenceBy(bylocator,30);
        element.all(bylocator).count().then(function(cnt){
            if(cnt==0){

                return false;
            }else{
                console.log("Total Element found "+cnt);
                return true;
            }

        },function(error){
            reporter.addFailStepObjectIssue(error);
            //expect(true).toBe(false);

        });
    }
    */
};
    


   

module.exports = new Pdriver();
