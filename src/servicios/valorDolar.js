import axios from "axios";

const URL = "https://api.bluelytics.com.ar/v2/latest";

export async function getValorVentaDolarBlue() {
  try {
    const {data} = await axios.get(URL);
    const valorVentaDolar = data.blue.value_sell;
    return valorVentaDolar;
  } catch (error) {
    console.error("Error valorDolar GET:", error);
    return null;
  }
}
