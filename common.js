
var Pdriver=require('../Common/Pdriver.js');
var reporter=require('../Common/Reporter.js');

var Common=function(){
    this.fn_ValidateIsDisplayedBy=function(by){
        Pdriver.isDisplayedBy(by).then(function(flg){
            //console.log('value of flg'+String(flg));
        

            if(flg){
                reporter.addPassStep('Element was displayed '+by);
            }else{
                reporter.addFailStepValidationIssue('Validation Issue-Object was not visible '+by);
            }
            expect(flg).toBe(true);
        });
    }
    this.fn_ValidateIsDisplayedByCustom=function(by,objname){
        Pdriver.isDisplayedBy(by).then(function(flg){
            //console.log('value of flg'+String(flg));
        

            if(flg){
                reporter.addPassStep(objname +' Element was displayed ');
            }else{
                reporter.addFailStepValidationIssue('Validation Issue-'+objname + ' was not visible' );
            }
            expect(flg).toBe(true);
        });
    }
    this.fn_ValidateTextInListElements=function(by,text,comments){
        var flg=true;
        var list=Pdriver.getAllElementsBy(by).then(function(el){
            console.log('Length of Elemets '+el.length);
            el.filter(function(elem){
                if(elem.isDisplayed()){

                    elem.getText().then(function(actualtext){
                        console.log('Actual Text '+actualtext);
                        if(actualtext.includes(text)){
    
                        }else{
                            flg=false;
                        }
    
    
                    })

                }
               

            });
            /*
            el.getText().then(function(actualtext){
               
            })

            */
        });
       
        if(flg){
            reporter.addPassStep('Search string '+ comments+' '+text+' was found in all reasult');
        }else{
            reporter.addPassStep('Search with '+ comments+' '+text+' was not found in all row ');
        }
    }


}
module.exports=new Common();
