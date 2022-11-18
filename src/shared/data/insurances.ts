import { InsurancesObject } from "../contexts/UserProvider";
import theftIcon from "../assets/icon-theft.png";
import damageIcon from "../assets/icon-damage.png";
import runoverIcon from "../assets/icon-runover.png";

const insurances: InsurancesObject = {
  "1": {
    id: "1",
    name: "Llanta robada",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    icon: theftIcon,
    price: 15,
    isActive: false,
    isAvailable: true,
  },
  "2": {
    id: "2",
    name: "Choque y/o pasarte la luz roja",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    icon: damageIcon,
    price: 20,
    isActive: false,
    isAvailable: true,
  },
  "3": {
    id: "3",
    name: "Atropello en la vía Evitamiento",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    icon: runoverIcon,
    price: 50,
    isActive: false,
    isAvailable: true,
  },
};

export default insurances;
