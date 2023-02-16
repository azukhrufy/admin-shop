export function useMap(){
    const mapBrand = (data: any, setCount: (data: any) => void, setMap: (data: any) => void) => {
        let brand: any[] = [];
        let counts: any = {};
        data.map((d: any) => {
        brand.push(d.brand);
        });
        if (brand) {
        brand.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        setCount(counts);
        let uniqueBrands = brand.filter(function (b, pos) {
            return brand.indexOf(b) == pos;
        });
        setMap(uniqueBrands);
        }
    }

    function mapUser(allData : any, id: any) {
        const user: any = allData.filter((user: any) => user.id === id);
        if(user.length > 0){
          return user[0].name;
        }
      }

    return {
        mapBrand,
        mapUser
    }
}