import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { MenuIcon } from "@/components/Icons/MenuIcons";
import Table from "@/components/Table/Table";
import DeallTextField from "@/components/TextField/TextField";
import { Menu } from "@/constant/menu";
import { prodColumns } from "@/constant/productColumn";
import { useMap } from "@/hooks/useMap";
import { CartService } from "@/Services/CartService";
import { UserService } from "@/Services/UserService";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const userData = {
  portfolio: "130.431.449",
  buyingPwr: 13431449,
  image: <img src="/Image/user.png" alt="user" />,
};

type CartProps = {
  products: any[];
  iniprops?: any;
};

const DetailPage = () => {
  const router = useRouter();
  const cartService = new CartService();
  const userService = new UserService();

  const [cartDetail, setCartDetail] = useState<any>([]);
  const [prod, setProd] = useState([]);
  const [user, setUser] = useState('');

  let productRows: any;

  const handleClick = (e : any) => {
    e.preventDefault();
    router.push('/cart');
  }

  useEffect(() => {
    async function getCart() {
      if (router.isReady) {
        const data = await cartService.getCart(router.query.id);
        setCartDetail(data.data);
        setProd(data.data.products);
      }
    }
    getCart();
  }, [router.query]);

  useEffect(() => {
    async function getUser(id: any) {
        let data = (await userService.getUser(id)).data;
        let res = data.firstName + " " + data.lastName;
        setUser(res);
      }
      getUser(cartDetail.userId);
  },[cartDetail])

  if (prod) {
    productRows = prod.map((p: any, key: any) => {
      return {
        id: key,
        productName: p.title,
        discount: p.discountPercentage,
        quantity: p.quantity,
        price: p.price,
        total: p.total,
        discountedPrice: p.discountedPrice,
      };
    });
  }

  return (
    <div>
      <>
        <Head>
          <title>Admin</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <BaseLayout
            menu={Menu}
            sidebarLogo={MenuIcon.logo}
            headerData={userData}
          >
            <div className="mb-4 w-full">
            <div className="bg-basic-12 w-full rounded-2xl p-6">
              <p className="flex text-xxs text-brand-text-grey items-center">
                Cart
              </p>
              <p className="flex text-base items-center gap-2 font-extrabold"><span className="text-brand-brand-active cursor-pointer" onClick={handleClick}>Cart</span> / {cartDetail.id}</p>
            </div>
          </div>
            <div className="bg-basic-12 h-fit w-full mb-4 p-4 sm:p-8">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <DeallTextField label={"Cart Id"} value={cartDetail.id} />
                  <DeallTextField label={"User"} value={user ? user : ''} />
                  <DeallTextField
                    label={"Total Quantity"}
                    value={cartDetail.totalQuantity}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <DeallTextField label={"Total Price"} value={cartDetail.total} />
                  <DeallTextField
                    label={"Disc. Total"}
                    value={cartDetail.discountedTotal}
                  />
                  <DeallTextField
                    label={"Total Product"}
                    value={cartDetail.totalProducts}
                  />
                </div>
              </div>
            </div>

            <Table rows={productRows} columns={prodColumns} />
          </BaseLayout>
        </main>
      </>
    </div>
  );
};

export default DetailPage;
