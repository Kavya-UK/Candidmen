import "./App.css";
import HomeBanner from "./components/common/HomeBanner";
import ProductImage from "./components/common/ProductImage";
import { collections } from "./data/home/imagesLink";
import CollectionContainer from "./components/home/CollectionContainer";
import ProductSummary from "./components/common/ProductSummary";
import ProductCarousel from "./components/common/ProductCarousel";
import { productList } from "./data/home/products";
import CustomButton from "./components/common/CustomButton";
import InputText from "./components/common/InputText";
import { ReactComponent as ChevronRightIcon } from "./assets/icons/chevronRight.svg";
import { ReactComponent as FavouriteIcon } from "./assets/icons/favourite.svg";
import AddressBar from "./components/common/AddressBar";
import ProductStatus from "./components/common/ProductStatus";
import InputPhone from "./components/common/InputPhone";
import OrderSummary from "./components/common/OrderSummary";
import Subscribe from "./components/home/SubscribeLetter";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import ProductListing from "./pages/ProductListing";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <div className="App">
      <Home />
      <Shop/> 
       <ProductListing />
      <ProductDescription/>
      <ShoppingCart/>
      {/* <div className="h-[450px] ">
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
      <div></div>
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
      <div className="mt-[50px]"><Subscribe/></div> */}

    </div>
  );
}

export default App;
