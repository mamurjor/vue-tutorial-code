

<template>

 <mymenu  > 

    <template  v-slot:contactsection >
        <div class="col-lg-6 col-md-7 col-12" >
         
            
							<!-- Top Contact -->
							<ul class="top-contact">
								<li><i class="fa fa-phone"></i>{{ cell }}</li>
								<li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">{{ email }}</a></li>
							</ul>
							<!-- End Top Contact -->
						</div>
    </template>
  <template v-slot:topmenu>
    <ul class="top-link" >

<li v-for="mysinglemenu in mytopmenu"> <a :href="mysinglemenu.url"> {{ mysinglemenu.name }} </a></li>

</ul>
  </template>
       
  <template v-slot:mainmenu>
    <div class="main-menu" >
									<nav class="navigation">
										<ul class="nav menu">
											<li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="index.html">Home Page 1</a></li>
												</ul>
											</li>
											<li><a href="#">Doctos </a></li>
											<li><a href="#">Services </a></li>
											<li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="404.html">404 Error</a></li>
												</ul>
											</li>
											<li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="blog-single.html">Blog Details</a></li>
												</ul>
											</li>
											<li><a href="contact.html">Contact Us</a></li>
										</ul>
									</nav>
		</div>
  </template>
      


 </mymenu>
 <myslider @getinformation="receivedchildinfo" />
 <myschedule  />
 <myfeature/>
 <myfun/>
 <mychoose/>

 <mycalltoaction/>

 <myportfolio/>
 <myservice/>

 <myprice v-for="singleprice in  setprice"  v-bind:price="setprice" />

 <myblog/>

 <myclient />

 <myappoinment />


 
 <mynewsletter />

 <myfooter @click="parentinfo" class="mama" style="background-color: red;" copyright="mamurjor IT " />
 


 
</template>



<script >
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import mymenu from './components/mymenu.vue'

import myslider from "./components/myslider.vue"

import myschedule from "./components/schedule.vue"
import myfeature from "./components/feature.vue"

import myfun from "./components/fun.vue"

import mychoose from "./components/choose.vue"
import mycalltoaction from "./components/calltoaction.vue"

import myportfolio from "./components/portfolio.vue"

import myservice from "./components/service.vue"
import myprice from "./components/price.vue"

import myblog from "./components/blog.vue"

import myclient from "./components/client.vue"

import myappoinment from "./components/appoinment.vue"

import mynewsletter from "./components/newsletter.vue"

import myfooter from "./components/footer.vue"

export default{

    name:"My Application",
    components:{
        mymenu,
        myslider,
        myschedule,
        myfeature,
        myfun,
        mychoose,
        mycalltoaction,
        myportfolio,
        myservice,
        myprice,
        myblog,
        myclient,
        myappoinment,
        mynewsletter,
        myfooter

    },
    data(){
        return {
           cell:"017466868",
           email:"hadijaman@gmail.com",
            setprice:['100','200','300','400','500'],
            discount:0,
            mytopmenu:[
				{
					name:"about",
					url:"about"
				},
				{
					name:"Doctors",
					url:"Doctors"
				},

				{
					name:"Contact",
					url:"Contact"
				},
				{
					name:"FAQ",
					url:"FAQ"
				},
			]
        }
    },
    methods:{
        receivedchildinfo(getprice){
           if(getprice>=300){
            this.discount=30
           }
           else{
            this.discount=10
           }
        },
        parentinfo(){
            alert("mamurjor ITT, Mirpur#10")
        }
    }
}
</script>
<!-- <style>


body{
    background-color: red;
}
</style> -->