import React, { Component } from 'react';
import Phones from './Phones';
import Computers from './Computers';
import Smartwatches from './Smartwatches';
import "./style.css";

const phonesData = [
    { model: "FACE", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", price: "Chemical Peels, Microneedling, Microderbabrasion & Traditional Facials suscipit ultrices." },
    { model: "BODY", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", price: "Massage, Microdermabrassion, Exfoliation, Microneedling & Hot Stone Therapy  suscipit ultrices." },
    { model: "NAILS", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", price: "Professional nail care treatments and products. Shellac and footlogic  elit nullam nunc justo sagittis." },
     { model: "WAXING", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", storage: "Lorem ipsum dolor sit amet."},
    { model: "EYES", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", storage: "Lorem ipsum dolor sit amet."},
    { model: "TANNING ", img_url: "https://simplyfox.co.uk/wp-content/uploads/2018/08/iStock-640299760.jpg", storage: "Lorem ipsum dolor sit amet."}
];


const computersData = [
    { img_url: "https://png.pngtree.com/png-clipart/20230330/original/pngtree-macbook-pro-16-png-image_9011850.png", model: "MacBook Pro", storage: 512, ram: 16, price: 1799 },
    { img_url: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=675&qlt=100,1&resMode=sharp2&size=675,402&chrss=full", model: "Dell XPS 13", storage: 512, ram: 16, price: 1499 },
    { img_url: "https://www.evetech.co.za/repository/ProductImages/hp-envy-15-core-i9-rtx-3060-4k-touchscreen-laptop-47d96ea-800px-v2.png ", model: "HP Envy 15", storage: 256, ram: 16, price: 1299 },
    { img_url: "https://dlcdnwebimgs.asus.com/gain/A1433BAB-3BC8-40BF-965C-B3E95E59BC61/w1000/h732", model: "ASUS ROG Zephyrus G14", storage: 1024, ram: 32, price: 1499 },
    { img_url: "https://imageio.forbes.com/blogs-images/patrickmoorhead/files/2017/08/feature-1-lenovo-thinkpad-x1-carbon-5.png?format=png&height=900&width=1600&fit=bounds", model: "Lenovo ThinkPad X1 Carbon", storage: 512, ram: 16, price: 1399 },
    { img_url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LEgb?ver=421a", model: "Microsoft Surface Laptop 4", storage: 256, ram: 16, price: 1299 },
    { img_url: "https://www.gigahertz.com.ph/cdn/shop/files/predator-helios-300-ph317-56-perkey-backlit-on-wallpaper-black-01-2_f97b56b0-2d31-4ee7-8b1d-f6f8704aa9a8_1024x.webp?v=1707720868", model: "Acer Predator Helios 300", storage: 512, ram: 16, price: 1199 },
    { img_url: "", model: "MSI GS66 Stealth", storage: 1024, ram: 32, price: 1799 },
    { img_url: "", model: "Razer Blade 15", storage: 512, ram: 16, price: 1799 },
    { img_url: "", model: "Gigabyte AORUS 15G", storage: 1024, ram: 32, price: 2099 }
];

const smartwatchesData = [
    { img_url: "https://grademobile.co.uk/cdn/shop/files/watch-6-gps-red-red-strap_357e813b-1562-41b2-b0a4-8f00b2cdd2b8.webp?v=1694007042", model: "Apple Watch Series 6", size: 40, price: 399 },
    { img_url: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-r870nzkaxaa/gallery/us-galaxy-watch4-sm-r870nzkaxaa-505803525?$720_576_PNG$", model: "Samsung Galaxy Watch 4", size: 44, price: 299 },
    { img_url: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/versa-3/hero-static/black/versa3-black-HeroStatic1.png", model: "Versa 3 Pro", size: 40, price: 229 },
    { img_url: "https://www.garmin.com.sg/m/sg/g/products/vivomoveHR-Silver-Brown-image-01.png", model: " Garvin Vivomore HR", size: 42, price: 199 },
    { img_url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt2/img/huawei-watch-gt2-Dual-chip_01-mobi-new.png", model: "Huawei Watch GT 2", size: 46, price: 249 },
    { img_url: "https://d1yt8qkhp8oydd.cloudfront.net/images/img_1648053088684192312.png", model: "TicWatch Pro 3", size: 48, price: 299 },
    { img_url: "https://crdms.images.consumerreports.org/prod/products/cr/models/400094-smartwatches-fossil-carlyle-hr-gen-5-10012279.png", model: "Fossil Gen 5", size: 44, price: 299 },
    { img_url: "https://tfn-trading.com/media/k2/galleries/685/2_pro_01.png", model: "Amazfit GTR 2", size: 42, price: 179 },
    { img_url: "https://c-th.niceshops.com/upload/image/product/large/default/withings-steel-hr-sport-hybrid-smartwatch-black-74397-en.png", model: "Withings Steel HR", size: 40, price: 179 },
    { img_url: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1618453099.5066160.png", model: "Xiaomi Mi Band 6", size: 35, price: 49 }
];

class Store extends Component {
    state = {
        category: "phones",
        products: [],
    };

    componentDidMount() {
     
        this.setProducts();
    }

    setProducts = () => {
        switch (this.state.category) {
            case "phones":
                this.setState({ products: phonesData });
                break;
            case "computers":
                this.setState({ products: computersData });
                break;
            case "smartwatches":
                this.setState({ products: smartwatchesData });
                break;
            default:
                this.setState({ products: [] });
                break;
        }
    };

    showCategory = (category) => {
        this.setState({ category }, this.setProducts);
    };

    render() {
        return (
            <React.Fragment>
                <div className="btn-group">
                   
                </div>
                <div className="product-container">
                    {this.state.products.map((product) => {
                        switch (this.state.category) {
                            case "phones":
                                return <Phones img_url={product.img_url} model={product.model} storage={product.storage} price={product.price} />;
                            case "computers":
                                return <Computers  img_url={product.img_url} model={product.model} storage={product.storage} ram={product.ram} price={product.price} />;
                            case "smartwatches":
                                return <Smartwatches  img_url={product.img_url} model={product.model} size={product.size} price={product.price} />;
                            default:
                               
                        }
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default Store;
