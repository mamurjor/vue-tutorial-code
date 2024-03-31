<template>
	<!-- Header Area -->
    <header class="header" >
			<!-- Topbar -->
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-5 col-12">

						
							<slot name="topmenu"></slot>
							<!-- {{ mytopmenu }} -->
							<!-- Contact -->
							<!-- <ul class="top-link">

								<li v-for="menu in mytopmenu"> <a :href="menu.url"> {{ menu.name }} </a></li>
							
							</ul> -->
							<!-- End Contact -->
						</div>
						<slot name="contactsection" :lclData="data"></slot>
					</div>
				</div>
			</div>
			<!-- End Topbar -->
			<!-- Header Inner -->
			<div class="header-inner">
				<div class="container">
					<div class="inner">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-12">
								<!-- Start Logo -->
								<div class="logo">
								<a href="index.html"><img src="../assets/img/logo.png" alt="#"></a> 
								</div>
								<!-- End Logo -->
								<!-- Mobile Nav -->
								<div class="mobile-nav"></div>
								<!-- End Mobile Nav -->
							</div>
							<div class="col-lg-7 col-md-9 col-12">
								<!-- Main Menu -->
								
							<slot name="mainmenu"></slot>
								<!--/ End Main Menu -->
							</div>
							<div class="col-lg-2 col-12">
								<div class="get-quote">
									<a href="appointment.html" class="btn">Book Appointment</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Header Inner -->
		</header>
		<!-- End Header Area -->
</template>

<script >

export default{



	data(){
		return {
			data: 'This is local data',
			cell:"01746686868",
			email:"mamurjorbd@gmail.com",
			
		}
	}
}
</script>

<style scoped>

</style>

