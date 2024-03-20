const express=require('express');
const z=require('zod');

const schema=z.object({
  age: z.number(),
  sex: z.number(),          
  bmi: z.number(),       
  bp: z.number(),                 
  s1: z.number(),      
  s2: z.number(),      
  s3: z.number(),      
  s4: z.number(),      
  s5: z.number(),      
  s6: z.number(), 
})
const app = express();

app.listen(3000);

app.use(express.json());

app.get('/',function(req,res){
    const body1=req.body;

    safeParse
    
});



