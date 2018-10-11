/**
 * 
 *  Developer : Karthik Ramanathan, Freelancer/React JS
 * 
 *  Usage
 * 
 *  console.log(indianCurrencyInWords(500.20));
 * 
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.indianCurrencyInWords = factory(root.b);
    }
}(this, function (b) {
    return (f)
    {
        var _$_2636=[" zero"," one"," two"," three"," four"," five"," six"," seven"," eight"," nine"," ten"," eleven"," twelve"," thirteen"," fourteen"," fifteen"," sixteen"," seventeen"," eighteen"," nineteen",""," twenty"," thirty"," forty"," fifty"," sixty"," seventy"," eighty"," ninety","00","0","toString","split","reverse","length","1"," hundred"," thousand"," lakh"," crore","toFixed","."," Rupees only"," paisa only"," Rupees and","exports"];
    
        var g,a,c,e,h;//1
        const m=[_$_2636[0],_$_2636[1],_$_2636[2],_$_2636[3],_$_2636[4],_$_2636[5],_$_2636[6],_$_2636[7],_$_2636[8],_$_2636[9]];//3
        const o=[_$_2636[10],_$_2636[11],_$_2636[12],_$_2636[13],_$_2636[14],_$_2636[15],_$_2636[16],_$_2636[17],_$_2636[18],_$_2636[19]];//4
        const n=[_$_2636[20],_$_2636[10],_$_2636[21],_$_2636[22],_$_2636[23],_$_2636[24],_$_2636[25],_$_2636[26],_$_2636[27],_$_2636[28]];//5
        var a=[];//6
        var d=function(s)
        {
            var p=function()
            {
                if(c[e]== 0)
                {
                    a[h]= _$_2636[20]
                }
                else 
                {
                    if(c[e]== 1)
                    {
                        a[h]= o[c[e- 1]]
                    }
                    else 
                    {
                        a[h]= n[c[e]]
                    }
                    
                }
                
            }
            ;//10
            a= [];if(s== _$_2636[29]|| s== _$_2636[30]|| parseFloat(s)== 0)
            {
                return _$_2636[0]
            }
            //21
            var t=s[_$_2636[31]]();//24
            g= t[_$_2636[32]](_$_2636[20]);c= g[_$_2636[33]]();var r=g[_$_2636[34]];//28
            var q=_$_2636[20];//29
            h= 0;for(e= 0;e< r;e++)
            {
                switch(e)
                {
                    case 1://33
                    case 4://34
                    case 6://35
                    case 8:p();break//36
                    case 0:if(c[e]== _$_2636[30]|| c[e+ 1]== _$_2636[35])
                    {
                        a[h]= _$_2636[20]
                    }
                    else 
                    {
                        a[h]= m[c[e]]
                    }
                    //41
                    a[h]= a[h]+ _$_2636[20];break//40
                    case 2:if(c[e]== _$_2636[30])
                    {
                        a[h]= _$_2636[20]
                    }
                    else 
                    {
                        if(c[e- 1]!== _$_2636[30]&& c[e- 2]!== _$_2636[30])
                        {
                            a[h]= m[c[e]]+ _$_2636[36]
                        }
                        else 
                        {
                            a[h]= m[c[e]]+ _$_2636[36]
                        }
                        
                    }
                    //50
                    break//49
                    case 3:if(c[e]== _$_2636[30]|| c[e+ 1]== _$_2636[35])
                    {
                        a[h]= _$_2636[20]
                    }
                    else 
                    {
                        a[h]= m[c[e]]
                    }
                    //59
                    if(c[e+ 1]!== _$_2636[30]|| c[e]> _$_2636[30])
                    {
                        a[h]= a[h]+ _$_2636[37]
                    }
                    //64
                    break//58
                    case 5:if(c[e]== _$_2636[30]|| c[e+ 1]== _$_2636[35])
                    {
                        a[h]= _$_2636[20]
                    }
                    else 
                    {
                        a[h]= m[c[e]]
                    }
                    //70
                    if(c[e+ 1]!== _$_2636[30]|| c[e]> _$_2636[30])
                    {
                        a[h]= a[h]+ _$_2636[38]
                    }
                    //75
                    break//69
                    case 7:if(c[e]== _$_2636[30]|| c[e+ 1]== _$_2636[35])
                    {
                        a[h]= _$_2636[20]
                    }
                    else 
                    {
                        a[h]= m[c[e]]
                    }
                    //81
                    a[h]= a[h]+ _$_2636[39];break//80
                    default:break
                }
                //32
                h++
            }
            //31
            a[_$_2636[33]]();for(e= 0;e< a[_$_2636[34]];e++)
            {
                q+= a[e]
            }
            //97
            return q
        }
        ;//8
        f= parseFloat(f)[_$_2636[40]](2);var b=f[_$_2636[31]]()[_$_2636[32]](_$_2636[41]);//104
        var l=b[0];//105
        var k=b[1];//106
        if((parseInt(l)&&  !parseInt(k))|| (!parseInt(l)&&  !parseInt(k)))
        {
            return d(l)+ _$_2636[42]
        }
        else 
        {
            if(!parseInt(l)&& parseInt(k))
            {
                return d(k)+ _$_2636[43]
            }
            else 
            {
                return d(l)+ _$_2636[44]+ d(k)+ _$_2636[43]
            }
            
        }
        
    };
}));