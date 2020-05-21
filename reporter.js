var Reporter=function(){
    
   
    this.addFailStepObjectIssue=function(errorlog){
        allure.createStep('Object issue '+errorlog,function(){
            expect(true).toBe(false);
            throw new  Error(errorlog);
            
        })();
        

    }
    this.addFailStepScriptIssue=function(errorlog){
        allure.createStep('Script issue '+errorlog,function(){
            expect(true).toBe(false);
            throw new  Error(errorlog);
        })();
        
    }
    this.addFailStepDataIssue=function(errorlog){
        allure.createStep('Data issue '+errorlog,function(){
            expect(true).toBe(false);
            throw new  Error(errorlog);
        })();
       
    }
    this.addFailStepValidationIssue=function(errorlog){
        allure.createStep('Validation issue '+errorlog,function(){
            expect(true).toBe(false);
            throw new  Error(errorlog);
        })();
       
    }
    this.addPassStep=function(logdet){
        //expect(true).toBe(false);
        allure.createStep(logdet,function(){
           
        })();
        

    }


};
module.exports=new Reporter();
