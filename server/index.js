const express=require('express'); const path=require('path'); const app=express();
app.use(express.json());
const data={stats:{members:1284,active:892,matches:3692,applications:486},members:[
{id:1,name:'Arif Rahman',goal:'Master’s in Australia',country:'Bangladesh',progress:74,status:'Document gap',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85'},
{id:2,name:'Sarah Ahmed',goal:'Financial freedom',country:'Dhaka',progress:61,status:'Needs next step',image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=85'},
{id:3,name:'Mahin Khan',goal:'Canada application',country:'Chattogram',progress:86,status:'Ready for review',image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85'}]};
app.get('/api/overview',(req,res)=>res.json(data));
app.post('/api/journey/:id/action',(req,res)=>res.json({ok:true,message:`Next action saved for member ${req.params.id}`,action:req.body.action}));
app.listen(8787,()=>console.log('GrowVerse API http://localhost:8787'));
