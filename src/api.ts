import axios from "axios";

export const cache: {
  token: string | null;
  healthCares: any[];
  finances: any[];
  technologies: any[];
  date: string | null;
  username: string | null;
} = {
  token: localStorage.getItem("token") || null,
  healthCares: [],
  finances: [],
  technologies: [],
  date: localStorage.getItem("date") || null,
  username: localStorage.getItem("username") || null,
};

export async function getToken(name: string, date: string) {
  await axios
    .post("https://wemi-round2-server.herokuapp.com/round2/authentication", {
      displayName: name,
      displayDate: date,
    })
    .then(async (result) => {
      cache.token = result.data.access_token;
      localStorage.setItem("token", result.data.access_token);
      localStorage.setItem("username", name);
      localStorage.setItem("date", date);
      await getProducts();
    })
    .catch((err) => {
      cache.token = null;
    });
}

export async function getProducts() {
  return await axios
    .post(
      "https://wemi-round2-server.herokuapp.com/round2/get-products",
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then((result) => {
      cache.healthCares = result.data.products.filter(
        (item: any) => item.category === "Health Care"
      );
      cache.healthCares.sort((a: any, b: any) => a.name.localeCompare(b.name));
      cache.technologies = result.data.products.filter(
        (item: any) => item.category === "Technology"
      );
      cache.technologies.sort((a: any, b: any) => a.name.localeCompare(b.name));
      cache.finances = result.data.products.filter(
        (item: any) => item.category === "Finance"
      );
      cache.finances.sort((a: any, b: any) => a.name.localeCompare(b.name));
      console.log(cache);
      return cache;
    });
}
