import "./App.css";
import HomeBanner from "./components/common/home-banner";
import ProductImage from "./components/common/product-image";
import { collections } from "./data/home/imagesLink";
import CollectionContainer from "./components/common/collection-container";
import ProductSummary from "./components/common/product-summary";
import ProductCarousel from "./components/common/productCarousel";
import { productList } from "./data/home/products";
import CustomButton from "./components/common/customButton";
import InputText from "./components/common/inputText";
import { ReactComponent as ChevronRightIcon } from "./assets/icons/chevronRight.svg";
import { ReactComponent as FavouriteIcon } from "./assets/icons/favourite.svg";
import AddressBar from "./components/common/addressBar";
import ProductStatus from "./components/common/product-status";
import InputPhone from "./components/common/inputPhone";
import OrderSummary from "./components/common/orderSummary";

const collection = {
  leftTop: {
    product: <ProductImage title="Suits & Tuxedo" bgImg={collections.tuxedo} />,
  },
  leftBottom: {
    product: <ProductImage title="Jodhpuri" bgImg={collections.jodhpuri} />,
  },
  centerTop: {
    product: <ProductImage title="Blazer" bgImg={collections.blazer} />,
  },
  centerBottom: {
    product: (
      <ProductImage title="Accessories" bgImg={collections.accessories} />
    ),
  },
  rightTop: {
    product: (
      <ProductImage title="Kurta Pyjama & Bandi " bgImg={collections.kurta} />
    ),
  },
  rightBottom: {
    product: (
      <ProductImage title="Sherwani & Indo" bgImg={collections.sherwani} />
    ),
  },
};
function App() {
  return (
    <div className="App">
      <div className="h-[450px] ">
        <HomeBanner />
      </div>
      <div className="h-[100px] w-[420px] mt-20">
        <ProductImage title="Accessories" bgImg={collections.accessories} />
      </div>
      <div className="h-[400px] w-[320px] mt-20">
        <ProductImage title="Blazer" bgImg={collections.blazer} />
      </div>

      <div className="grid grid-cols-3 h-[350px] gap-3">
        <div className="mt-20">
          <ProductSummary
            productImg="assets/home/products/product1.png"
            title="Grey Embroidered All Over Suit"
            price="27890"
            isRent={true}
            discount={"50"}
            rentPrice="2789"
          />
        </div>
        <div className="mt-20">
          <ProductSummary
            productImg="assets/home/products/product2.png"
            title="Grey Embroidered All Over Suit"
            price="27890"
            isRent={true}
            discount={"50"}
            rentPrice="2789"
          />
        </div>
        <div className="mt-20">
          <ProductSummary
            productImg="assets/home/products/product3.png"
            title="Grey Embroidered All Over Suit"
            price="27890"
            isRent={true}
            discount={"50"}
            rentPrice="2789"
          />
        </div>
      </div>
      <div>{/* <ProductCarousel listItems={productList} /> */}</div>
      <div className="h-[450px] w-[90%] mx-auto mt-20">
        <CollectionContainer collection={collection} />
      </div>

      <div className="grid lg:grid-cols-3">
        <div>
          <div className=" mt-20">
            <CustomButton type="primary" primaryTextColor={"text-black"}>
              BROWSE NOW
            </CustomButton>
          </div>
          <div className="  mt-20">
            <CustomButton type="secondary" primaryTextColor={"text-black"}>
              BROWSE NOW
            </CustomButton>
          </div>
          <div className="  mt-20">
            <CustomButton
              type="text"
              primaryTextColor={"text-black"}
              icon={<ChevronRightIcon />}
            >
              BROWSE NOW
            </CustomButton>
          </div>
          <div className="  mt-20">
            <CustomButton
              type="text"
              primaryTextColor={"text-black"}
              icon={<FavouriteIcon />}
            ></CustomButton>
          </div>

          <div className="  mt-20">
            <InputText
              type="text"
              placeholder="Enter your First Name"
              label="Name"
            />
          </div>
          <div className="  mt-20">
            <InputText
              type="text"
              placeholder="Enter your Last Name"
              errorMessage="Please enter last name"
            />
          </div>
          <div className="  mt-20">
            <InputPhone placeholder="phone number" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div>
          <div className=" mt-20">
            <AddressBar
              addressTitle={"MYPCOT INFOTECH PRIVATE LIMITED"}
              addressLine1={"A 204, Gardenea Heights Kanakia Road, A…"}
              addressLine2={"Mira Road - East"}
              city="Thane"
              state="Maharashtra "
              zipCode="401107"
              phoneNumber="+91 543672993"
            />
          </div>
          <div className=" mt-20">
            <AddressBar
              addressTitle={"MYPCOT INFOTECH PRIVATE LIMITED"}
              addressLine1={"A 204, Gardenea Heights Kanakia Road, A…"}
              addressLine2={"Mira Road - East"}
              city="Thane"
              state="Maharashtra "
              zipCode="401107"
              phoneNumber="+91 543672993"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ProductStatus
          status="Delivered"
          imgSrc="assets/home/products/product2.png"
          productTitle="Grey Embroidered All Over Suit"
          deliveredDate="01/04/2023"
          returnDate="01/06/2023"
          rentPrice="2789"
        />
      </div>
      <div className="mt-20">
        <ProductStatus
          status="On the Way"
          imgSrc="assets/home/products/product1.png"
          productTitle="Grey Embroidered All Over Suit"
          bookingDate="01/04/2023"
          returnDate="01/06/2023"
          rentPrice="2789"
        />
      </div>
      <div className="mt-[20px]">
        <OrderSummary
          status="In Progress"
          orderTitle="Order Summary"
          orderedItems="3"
          rent="₹8367"
          deposit=" ₹8367"
          discount=" ₹0"
          walletCash=" ₹0"
          total=" ₹16735"
         
        />
      </div>
      <div className="mt-[20px]">
        <OrderSummary
          status="Completed"
          orderTitle="Order Summary"
          orderedItems="1"
          rent="₹2789"
          deposit=" ₹2789"
          discount=" ₹0"
          walletCash=" ₹0"
          total=" ₹5578"
          
        />
      </div>
    </div>
  );
}

export default App;
