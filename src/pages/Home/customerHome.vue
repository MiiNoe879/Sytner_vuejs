<template>
    <v-layout>
        <div slot="headerMessage">Select a report</div>
        <div class="row">
            <div class="col-sm-12">
                <!--TODO: the links below shall come from the store, add dummy data to store as follows: collection = [{_id: "23bnb38", name: "Table & chairs", models: 4}, {_id: "23bnb38", name: "Outdoor living", models: 7}]-->
                <ul class="nav nav-tabs">
                    <li>
                        <a class="nav-link active" href="#">Visitors </a></li>
                    <li>
                        <a class="nav-link" href="#">Members</a></li>
                    <li>
                        <a class="nav-link" href="#">Vouchers</a></li>
                    <li>
                        <a class="nav-link" href="#">Vouchers List</a></li>
                    <li>
                        <a class="nav-link" href="#">Expired Vouchers</a></li>
                    <li>
                        <a class="nav-link" href="#">App usage</a></li>
                    <li>
                        <a class="nav-link" href="#">App usage</a></li>
                </ul>

            </div>
            <div class="col-md-12">

                <v-modelcollections>
                    <div slot="header">
                        <br>
                        <h5>
                            <!--TODO: below display the id and name of the collection selected in the tab links from above.-->
                            Report details go here:
                        </h5>
                        <br>
                        <br>
                        <br><br><br><br><br><br><br><br><br>
                    </div>
                    <div slot="footer">
                        <!--<p>-->
                            <!--Total models found: &lt;!&ndash;TODO: models number in the data stored for the clicked collection&ndash;&gt;-->
                        <!--</p>-->
                        <!--&lt;!&ndash;TODO: Display as many cards as the numbers of models in the clicked collection -use dummy card as below:&ndash;&gt;-->

                        <!--<div class="card" style="width: 20rem;">-->
                            <!--<img class="card-img-top"  alt="Card Thumbnail cap">-->
                            <!--<div class="card-body">-->
                                <!--<h4 class="card-title">Card title</h4>-->
                                <!--<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
                                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<br><br><br>-->

                    </div>
                </v-modelcollections>
            </div>
        </div>
    </v-layout>
</template>

<script>
    /* ============
     * CustomerHome Page
     * ============
     */
    import VLayout from '@/layouts/Default';

    const componentsObject = {
      VLayout,
    };

    export default {
      name: 'customer-home',
      components: componentsObject,
    };
</script>
