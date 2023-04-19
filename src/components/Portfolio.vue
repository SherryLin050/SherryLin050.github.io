<script>
    export default {
        props: ['title','img','modal'],

    }
</script>

<template>  
  <div class="col-md-6 col-lg-4 mb-5">
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" :data-bs-target="modal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    {{ title }}
                </div>
            </div>
            <img class="img-fluid" :src="img" :alt="title" />
        </div>
    </div>
</template>

<style scoped>
    .portfolio-item {
        cursor: pointer;
        position: relative;
        display: block;
        max-width: 25rem;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .img-fluid{
        border-radius: 0.5rem;
    }
    .portfolio-item .portfolio-item-caption {
        margin: 30px 0 10px;
        @media (min-width: 992px) {            
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            transition: all 0.2s ease-in-out;
            opacity: 0;
            background-color: rgba(26, 188, 156, 0.9);
        }
    }
    .portfolio-item .portfolio-item-caption:hover {
        opacity: 1;
    }
    .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
        font-size: 1.5rem;
    }

    .portfolio-modal .btn-close {
        color: #1abc9c;
        font-size: 2rem;
        padding: 1rem;
    }
    .portfolio-modal .portfolio-modal-title {
        font-size: 2.25rem;
        line-height: 2rem;
    }
    @media (min-width: 992px) {
        .portfolio-modal .portfolio-modal-title {
            font-size: 3rem;
            line-height: 2.5rem;
        }
    }
</style>
