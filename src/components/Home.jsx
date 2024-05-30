import React, { Component } from "react";

import Item from "./Item";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      phones: [
        {
         
          brand: "Samsung",
          model: "Galaxy A34",
          price: 399,
          description: "128GB Green ",
          img_url:
            "https://cdn.dsmcdn.com/ty1184/product/media/images/prod/SPM/PIM/20240224/05/48442f30-ea5f-3749-a080-ef46be716424/1_org_zoom.jpg",
        },
        {
        
          brand: "Xiaomi",
          model: "Redmi 12",
          price: 350,
          description: "128GB Black",
          img_url:
            "https://www.mygsm.me/media/catalog/product/cache/258d312e552e2ed8256d71a7e306bad0/r/e/redmi-12-jade-black-dubai.jpg",
        },
        {
        
          brand: "Apple",
          model: "IPhone 15 Plus",
          price: 899,
          description: " 128GB Pink",
          img_url:
            "https://cdn.dsmcdn.com/ty1122/product/media/images/prod/SPM/PIM/20240105/22/eabdc451-9639-3d47-84e3-0a8ea3332354/1_org_zoom.jpg",
        },
        {
          
          brand: "Xiaomi",
          model: "Redmi Note 13 pro",
          price: 359,
          description: "256GB Black",
          img_url:
            "https://tech2tech.com.cy/wp-content/uploads/xiarn13p8256beu.png",
        },
        {
          brand: "Apple",
          model: "IPhone 13 ",
          price: 799,
          description: "128GB Star light",
          img_url:
            "https://systematixmedia.com/storage/product_varient/large/MLPG3HN-A_1_20210916114800.PNG",
        },
        {
          id:"iphone-15-pro-max",
          img_url:"https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-IN_fb4edf23-fd9d-4921-ab06-aec128ba2698.jpg?v=1695436281",
          brand:"Apple",
          model:"iPhone 15 Pro Max",
          description:"256GB Natural Titanium",
          price: "899 SALE PRICE 30% OFF",
          salePrice: 899,
        },
        {
          brand: "Realme",
          model: "C55",
          price: 299,
          description: "128GB Sun Light ",
          img_url:
            "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/r/mr149-1.jpg",
        },
        {
          brand: "Samsung",
          model: "Galaxy A54",
          price: 459,
          description: "256GB White",
          img_url:
            "https://cdn.dsmcdn.com/ty806/product/media/images/20230329/10/314649979/898797220/2/2_org_zoom.jpg",
        },
        {
          brand: "Samsung",
          model: "Galaxy S24 Ultra",
          price: 1499,
          description: "512GB Titanium Gray",
          img_url:
            "https://cdn.dsmcdn.com/ty1117/product/media/images/prod/PIM/20240103/11/30220ba1-9026-4281-a547-e33749fe04ab/1_org_zoom.jpg",
        },
        {
          brand: "Huawei",
          model: "P50 Pocket",
          price: 899,
          description: " 256GB White ",
          img_url: "https://r2media.horizondm.com/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/h/u/huawei-p50-pocket--_8-256_--bal-l49--white-1.jpg",
        },
        {
            brand: "Sony",
            model: "Xperia 5 III",
            price: 999,
            description: "128GB Black",
            img_url: "https://www.refurbished.store/cache/images/sony-xperia-5-iii-zwart-frontandback_600x600_BGresize_16777215-tj.png",
          },
          {
            brand: "OnePlus",
            model: "9 Pro",
            price: 899,
            description: "256GB Morning Mist",
            img_url: "data:image/jpeg;base64,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",
          },
          {
            "brand": "Samsung",
            "model": "Galaxy S21",
            "price": 799,
            "description": "128GB Phantom Gray",
            "img_url": "https://images.samsung.com/is/image/samsung/p6pim/uk/sm5g991bzadeub/gallery/uk-galaxy-s21-5g-g991-485739-sm5g991bzadeub-539102787?$650_519_PNG$"
          },
          {
            brand: "LG",
            model: "V70 ThinQ",
            price: 1299,
            description: "256GB Aurora Gray",
            img_url: "https://img.myipadbox.com/upload/store/product_l/EDA002294003A.jpg",
          },
          {
            brand: "Motorola",
            model: "Edge 30 Pro",
            price: 1199,
            description: "256GB Cosmic Gray",
            img_url: "https://motorolain.vtexassets.com/arquivos/ids/157000/motorola-edge30-pro-pdp-render-Stardust-3-8p1zhqcj.png?v=637835332500100000",
          },
          {
            brand: "Oppo",
            model: "Find X5 Pro",
            price: 1099,
            description: "256GB Gloss Black",
            img_url: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/new-navigation/en/smartphones/OPPO-Find-X5-black.png.thumb.webp",
          },
          {
            brand: "Vivo",
            model: "X80 Pro",
            price: 899,
            description: "256GB Midnight Blue",
            img_url: "https://media.croma.com/image/upload/v1708671395/Croma%20Assets/Communication/Mobiles/Images/253153_0_gpg7tm.png",
          },
          {
            brand: "Google",
            model: "Pixel 7 Pro",
            price: 1099,
            description: "128GB Sorta Sunny",
            img_url: "https://www.clove.co.uk/cdn/shop/products/google-pixel-6-pro-sorta-sunny-back_1200x.png?v=1665058279",
          },
          {
            brand: "BlackBerry",
            model: "KEY3",
            price: 799,
            description: "128GB Space Black",
            img_url: "https://mobilebazar.com.bd/assets/img/blackberry-key-3.gif",
          },
          {
            brand: "ZTE",
            model: "Axon 40 Pro",
            price: 999,
            description: "256GB Aurora",
            img_url: "https://i.ebayimg.com/images/g/~0sAAOSwd7Ni0F83/s-l1200.jpg",
          },
        
      ],
      computers: [
        {
          brand: "Apple",
          model: "Macbook Air M1",
          price: 1299,
          description: "8GB 256GB SSD",
          img_url: "https://powermaccenter.com/cdn/shop/files/MOSM163BLK012000x2000_823x.jpg?v=1692057928"
        },
        {
          brand: "Acer",
          model: "Aspire 7",
          price: 1049,
          description: "Ryzen 5 3550H GTX 1650",
          img_url: "https://matrixwarehouse.co.za/wp-content/uploads/2019/09/Acer-Laptop-Aspire-7-02.png"
        },
        {
          brand: "Dell",
          model: "XPS 13",
          price: 1549,
          description: "13.3 inch 4K Touchscreen",
          img_url: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/01/xps-13-oled-graphite-2.png"
        },
        {
          brand: "HP",
          model: "Spectre x360",
          price: 1399,
          description: "Intel Core i7 512GB SSD",
          img_url: "https://www.gadgetsalvation.com/media/catalog/product/cache/34e3fbe42bbd758997d9376083641673/h/p/hp-spectre-x360-15.png"
        },
        {
          brand: "MSI",
          model: "KATANA",
          price: 1345,
          description: "GF66 11UE-1019XTR I5",
          img_url: "https://cdn.dsmcdn.com/ty1008/product/media/images/prod/SPM/PIM/20231005/17/861cdd96-22b0-3780-a543-0a6c8226f19e/1_org_zoom.jpg"
        },
        {
          brand: "MSI",
          model: "CYBORG",
          price: 1560,
          description: " 15 I7-13620H 16GB",
          img_url: "https://cdn.dsmcdn.com/ty1167/product/media/images/prod/SPM/PIM/20240213/15/35e7aaf5-48cb-3edf-a1ec-29caff34b03d/1_org_zoom.jpg"
        },
        {
          brand: "Apple",
          model: "MacBook Pro",
          price: 1450,
          description: "32GB 1TBSSD Space Gray",
          img_url: "https://cdn.dsmcdn.com/ty957/product/media/images/20230627/10/389572317/842067005/1/1_org_zoom.jpg"
        },
        {
          brand: "DELL",
          model: "Inspiron 3520",
          price: 1159,
          description: " Intel Core I5",
          img_url: "https://cdn.dsmcdn.com/ty1044/product/media/images/prod/PIM/20231114/13/dc1049c5-99bc-45e7-9f97-60a93713ca8d/1_org_zoom.jpg"
        },
        {
          brand: "Casper",
          model: "Excalibur",
          price: 1270,
          description: "G770 Intel Core I7",
          img_url: "https://cdn.dsmcdn.com/ty1156/product/media/images/prod/SPM/PIM/20240202/10/2a321444-13e3-3f1e-ae56-3a22dbd4e91b/1_org_zoom.jpg"
        },
        {
          brand: "Lenovo",
          model: "IdeaPad 3",
          price: 1299,
          description: "4GB 256GB SSD ",
          img_url: "https://cdn.dsmcdn.com/ty1027/product/media/images/prod/PIM/20231101/15/32ce03c1-c52d-4a6d-97b9-3cf64761df3d/1_org_zoom.jpg"
        },
        {
          brand: "Asus",
          model: "Rog Strix G15",
          price: 1099,
          description: "Amd Ryzen 7",
          img_url: "https://cdn.dsmcdn.com/ty800/product/media/images/20230327/16/313390283/897538511/1/1_org_zoom.jpg"
        },
        {
          brand: "Apple",
          model: "Macbook Air",
          price: 1699,
          description: "Light Gray 256GB wsSSD",
          img_url: "https://cdn.dsmcdn.com/ty541/product/media/images/20220928/18/180895981/581885669/1/1_org_zoom.jpg"
        },
        {
          brand: "Huawei",
          model: " Matebook D16 ",
          price: 1250,
          description: "8GB 512GB Space Gray",
          img_url: "https://cdn.dsmcdn.com/ty548/product/media/images/20221001/15/183136719/585077931/1/1_org_zoom.jpg"
        },
        {
          brand: "Huawei",
          model: "Matebook D14",
          price: 999,
          description: "8GB 256GB Space gray",
          img_url: "https://cdn.dsmcdn.com/ty971/product/media/images/20230724/11/396331571/628336242/2/2_org_zoom.jpg"
        },
        {
          brand: "Samsung",
          model: "Galaxy Book Pro 360",
          price: 1599,
          description: "Intel i7, 16GB RAM, 512GB",
          img_url: "https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/s/a/sammmm_1.png"
        },
        {
          brand: "Razer",
          model: "Blade 15",
          price: 2399,
          description: "Intel i9, 32GB, 1TB SSD",
          img_url: "https://assets.razerzone.com/eeimages/support/products/1761/blade-15-advanced-2021-rz09-0367x.png"
        },
        {
          brand: "Microsoft",
          model: "Surface Laptop Studio",
          price: 2499,
          description: "Intel i7, 32GB, 1TB SSD",
          img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjsYMNXxjsF9Br3E2wJrgCvO_bkzKNiGZNg&usqp=CAU"
        },
        {
          brand: "LG",
          model: "Gram 17",
          price: 1899,
          description: " Intel i7, 16GB, 512GB SSD",
          img_url: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/08/laptop_2-removebg-preview-1.png"
        },
        {
          brand: "Google",
          model: "Pixelbook Go",
          price: "599 sale price!!! ",
          description: "Intel i5, 8GB, 128GB SSD",
          img_url: "https://www.avitalaptop.com/us/wp-content/uploads/thumbs_dir/Google-q9bq227hae417kc5xueckbeiiqc3hzmb9x4owwiqvc.jpg"
        },
        {
          brand: "Lenovo",
          model: "ThinkPad X1 Carbon",
          price: 1899,
          description: "Intel i7, 16GB, 1TB SSD",
          img_url: "https://i.ebayimg.com/images/g/B7YAAOSwCwVlS~V4/s-l1200.webp"
        }
      ],
      watches: [
        {
            brand: "Huawei",
            model: "Watch GT 3",
            price: 249,
            description: "Heart rate monitoring",
            img_url: "https://ennap.com/cdn/shop/files/800_800_2677ADE3B967D6F4E69CFEF4032CD06E.png?v=1698776962"
          },
          {
            brand: "Amazfit",
            model: "GTR 3 Pro",
            price: 299,
            description: "Blood oxygen, Heart rate ",
            img_url: "https://us.amazfit.com/cdn/shop/products/3e73a5d17e565bbdba35f1e33fc583b5.jpg?v=1632901807"
          },
          {
            brand: "Fossil",
            model: "Gen 6 Smartwatch",
            price: 299,
            description: "Built-in speaker, Swimproof",
            img_url: "https://9to5google.com/wp-content/uploads/sites/4/2021/08/Fossil-Gen-6-FTW4059.png?w=1000"
          },
          {
            brand: "Garmin",
            model: "Venu 2",
            price: 399,
            description: "AMOLED display,GPS",
            img_url: "https://res.garmin.com/en/products/010-02430-00/g/HIIT-workouts-e8412952-7c68-4142-91d3-5762cdc708c5.png"
          },
          {
            brand: "TicWatch",
            model: "Pro 3 Ultra GPS",
            price: 299,
            description: "Ultra GPS, Heart rate monitor",
            img_url: "https://d1yt8qkhp8oydd.cloudfront.net/images/img_1939430174059952609.png"
          },
          {
            brand: "Polar",
            model: "Vantage M2",
            price: 299,
            description: "Training load pro Recovery",
            img_url: "https://www.polar.com/ca-en/img/cms/d3f3de8c36c5fd8766944ced0a95481ae4fca628-1000x1000-568.png"
          },
          {
            brand: "Apple",
            model: "Apple Watch SE",
            price: 279,
            description: "Retina OLED display",
            img_url: "https://png.pngtree.com/png-clipart/20231105/original/pngtree-apple-watch-series-7-png-image_13508164.png"
          },
          {
            brand: "Samsung",
            model: "Galaxy Watch 4 Classic",
            price: 349,
            description: "Rotating bezel,Heart rate",
            img_url: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-r890nzkaxaa/gallery/us-galaxy-watch4-classic-sm-r890nzkaxaa-505850620?$720_576_PNG$"
          },
          {
            brand: "Fitbit",
            model: "Versa 3",
            price: 229,
            description: "Built-in GPS, Active Zone ",
            img_url: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/versa-4/hero-static/black/versa4-black-device-3qtr.png"
          },
          {
            brand: "Xiaomi",
            model: "Mi Watch Revolve Active",
            price: 199,
            description: "SpO2 monitoring, GPS",
            img_url: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601293004.98179445.png?width=550&height=550"
          },
          {
            brand: "Withings",
            model: "ScanWatch",
            price: 299,
            description: "ECG & SpO2 tracking",
            img_url: "https://support.withings.com/hc/article_attachments/17093224825745"
          },
          {
            brand: "Casio",
            model: "G-Shock Move Pro",
            price: 299,
            description: "Shock-resistant,matte",
            img_url: "https://wornandwound.com/library/uploads/2021/05/GSW-H1000-1_front-scaled.jpg"
          },
          {
            brand: "Suunto",
            model: "7 Titanium",
            price: 599,
            description: "Titanium bezel,Outdoor",
            img_url: "https://mirelojeria.com/18734-large_default/7-stone-gray-titanium.jpg"
          },
          {
            brand: "TAG Heuer",
            model: "Connected",
            price: 1800,
            description: "OLED touchscreen",
            img_url: "https://shorturl.at/xHIN3"
          },
          {
            brand: "Montblanc",
            model: "Summit 2+",
            price: 995,
            description: "Built-in LTE, Heart rate",
            img_url: "https://www.calibre88.com/media/catalog/product/cache/0aa52090e3dc99bb01935f2334dc625f/m/t/mtb_mb127683_ecom_01_01_t_2026029.png"
          },
          {
            brand: "Movado",
            model: "Connect 2.0",
            price: 695,
            description: "Heart rate tracking, NFC",
            img_url: "https://s7d1.scene7.com/is/image/dmqualcommprod/movado-gold?$QC_Responsive$&fmt=png-alpha"
          },
          {
            brand: "Michael Kors",
            model: "Access Gen 5E Darci",
            price: 350,
            description: "Speaker for calls",
            img_url: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/18519234_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1"
          },

          {
            brand: "Emporio Armani",
            model: "Smartwatch 3",
            price: 375,
            description: "Swimproof, Heart Rate ",
            img_url: "https://cloudfrontcdn.smartwatchspex.com/wp-content/uploads/2018/10/Emporio-Armani-Connected-Smartwatch-300x300.png"
          },
          {
            brand: "Diesel",
            model: "On Fadelite",
            price: 275,
            description: "Swimproof, Google OS",
            img_url: "https://lu.diesel.com/dw/image/v2/BBLG_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwea56b213/images/large/DT2021_00QQQ_01_F.jpg?q=80"
          },
          {
            brand: "Skagen",
            model: "Falster 3",
            price: 295,
            description: "Heart Rate Tracking",
            img_url: "https://shorturl.at/kwBT3"
          }
          
      ],
      category: "phones",
    };

    this.showPhones = () => {
      this.setState({ ...this.state, category: "phones" });
      document.getElementById("phones_btn").style.backgroundColor = "black";
      document.getElementById("phones_btn").style.transform = "scale(1.2)";
      document.getElementById("phones_btn").style.color = "white";
      document.getElementById("computers_btn").style.color = "black";
      document.getElementById("watches_btn").style.color = "black";
      document.getElementById("computers_btn").style.backgroundColor = "white";
      document.getElementById("computers_btn").style.transform = "scale(1)";
      document.getElementById("watches_btn").style.backgroundColor = "white";
      document.getElementById("watches_btn").style.transform = "scale(1)";
    };
    this.showComputers = () => {
      this.setState({ ...this.state, category: "computers" });
      document.getElementById("phones_btn").style.backgroundColor = "white";
      document.getElementById("phones_btn").style.transform = "scale(1)";
      document.getElementById("computers_btn").style.backgroundColor = "black";
      document.getElementById("computers_btn").style.color = "white";
      document.getElementById("phones_btn").style.color = "black";
      document.getElementById("watches_btn").style.color = "black";
      document.getElementById("computers_btn").style.transform = "scale(1.2)";
      document.getElementById("watches_btn").style.backgroundColor = "white";
      document.getElementById("watches_btn").style.transform = "scale(1)";
    };
    this.showWatches = () => {
      this.setState({ ...this.state, category: "watches" });
      document.getElementById("phones_btn").style.backgroundColor = "white";
      document.getElementById("phones_btn").style.transform = "scale(1)";
      document.getElementById("computers_btn").style.backgroundColor = "white";
      document.getElementById("computers_btn").style.transform = "scale(1)";
      document.getElementById("watches_btn").style.backgroundColor = "black";
      document.getElementById("watches_btn").style.color = "white";
      document.getElementById("phones_btn").style.color = "black";
      document.getElementById("computers_btn").style.color = "black";
      document.getElementById("watches_btn").style.transform = "scale(1.2)";
    };
  }

  render() {
    const { category } = this.state;
    return (
      <React.Fragment>
        <div className="categories">
          <button
            className={`glow-on-hover ${category === 'phones' ? 'active' : ''}`}
            id="phones_btn"
            onClick={this.showPhones}>
            Phones
          </button>
          <button
            className={`glow-on-hover ${category === 'computers' ? 'active' : ''}`}
            id="computers_btn"
            onClick={this.showComputers} >
            Computers
          </button>
          <button
            className={`glow-on-hover ${category === 'watches' ? 'active' : ''}`}
            id="watches_btn"
            onClick={this.showWatches}>
            Smart Watches
          </button>
        </div>
        <div className="home_container">
          {this.state[category].map((item) => (
            <Item
              img_url={item.img_url}
              brand={item.brand}
              model={item.model}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
  
}

