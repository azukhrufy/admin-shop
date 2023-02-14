import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { MenuIcon } from "@/components/Icons/MenuIcons";
import DeallSelect from "@/components/Select/Select";
import Table from "@/components/Table/Table";
import Toolbar from "@/components/Toolbar/Toolbar";
import { columns } from "@/constant/productColumn";
import { ProductService } from "@/Services/ProductService";
import { SelectChangeEvent } from "@mui/material/Select";
import { GridColDef } from "@mui/x-data-grid";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Menu = [
  {
    id: "product",
    icon: MenuIcon.home,
    name: "Products",
  },
  {
    id: "cart",
    icon: MenuIcon.portfolio,
    name: "Cart",
  },
];

const userData = {
  portfolio: "130.431.449",
  buyingPwr: 13431449,
  image: <img src="/Image/user.png" alt="user" />,
};

export default function Home() {
  const [product, setProduct] = useState<any>([]);
  const [filter, setFilter] = useState<any[]>([]);
  const [allProduct, setAllProduct] = useState<any>([]);
  const [search, setSearch] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCateg, setSelectedCateg] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands, setBrands] = useState<any>([]);
  const [brandsCount, setBrandsCount] = useState<any>({});

  const productService = new ProductService();

  const handleSearchClick = async () => {
    const res = (await productService.getProductSearch(search)).data;
    setProduct(res.products);
  };

  const handleCategFilter = async (c: any) => {
    const res = (await productService.getProductFilter(c)).data;
    setProduct(res.products);
    setSelectedBrand("");
  };

  const handleBrandFilter = async (b: any) => {
    if (b) {
      let res: any = [];
      product.map((p: any) => {
        if (b && p.brand == b) {
          res.push(p);
        }
      });
      if (res) {
        console.log(res);
        setProduct(res);
      }
    } else {
      const res = (await productService.getProductSearch(b)).data;
      setProduct(res.products);
      setSelectedCateg("");
    }
  };

  const handleFilter = (f: any, e: SelectChangeEvent) => {
    let res: any = {};
    res.filter = f;
    res.key = e.target.value;

    switch (f) {
      case "Categories":
        setSelectedCateg(e.target.value);
        break;
      case "Brands":
        setSelectedBrand(e.target.value);
        break;
    }
    if (filter.findIndex((o: any) => o.filter === f) >= 0) {
      removeFilter(f);
    }
    if (res.key) {
      setFilter((data: any[]) => Array.from(new Set([...data, res])));
    }
  };

  const removeFilter = (f: any) => {
    setProduct(allProduct);
    return setFilter((data) => data.filter((d: any) => d.filter !== f));
  };

  const handleSearchChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (e.keyCode == 13 || e.which == 13) {
      e.preventDefault();
      handleSearchClick();
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCateg(event.target.value);
    handleCategFilter(event.target.value);
  };

  const handleChangeBrand = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value);
    handleBrandFilter(event.target.value);
  };

  const mapBrand = (data: any) => {
    let brand: any[] = [];
    let counts: any = {};
    data.map((d: any) => {
      brand.push(d.brand);
    });
    if (brand) {
      brand.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      setBrandsCount(counts);
      let uniqueBrands = brand.filter(function (b, pos) {
        return brand.indexOf(b) == pos;
      });
      setBrands(uniqueBrands);
    }
  };

  useEffect(() => {
    async function getProduct() {
      const data = (await productService.getProduct()).data;
      setProduct(data.products);
      setAllProduct(data.products);
      mapBrand(data.products);
    }

    async function getCategories() {
      const data = (await productService.getCategories()).data;
      setCategories(data);
    }
    getProduct();
    getCategories();
  }, []);

  useEffect(() => {
    async function executeFilter(filter: any) {
      const data = product;
      let res: any = [];

        data.map((d: any) => {
          if (filter.filter === "Categories") {
            if (d.category === filter.key) {
              res.push(d);
            }
          }
          if (filter.filter === "Brands") {
            if (d.brand === filter.key) {
              res.push(d);
            }
          }
        });
      setProduct(res);
    }

    if (filter.length > 0) {
      console.log("masuk");
      filter.map((f) => {
        executeFilter(f);
      })
    }
  }, [filter]);

  const productRows = product.map((p: any, key: any) => {
    return {
      id: key,
      productName: p.title,
      brand: p.brand,
      price: p.price,
      stock: p.stock,
      category: p.category,
    };
  });

  // console.log(filter);
  return (
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
          sidebarLogo={<>Toko Online</>}
          headerData={userData}
        >
          <Toolbar
            onChange={handleSearchChange}
            onClick={handleSearchClick}
            onSubmit={handleSubmit}
          >
            <DeallSelect
              label="Categories"
              options={categories}
              value={selectedCateg}
              handleChange={(e: any) => handleFilter("Categories", e)}
            />
            <DeallSelect
              label="Brands"
              options={brands}
              value={selectedBrand}
              handleChange={(e: any) => handleFilter("Brands", e)}
            />
          </Toolbar>

          <Table rows={productRows} columns={columns} />
        </BaseLayout>
      </main>
    </>
  );
}
