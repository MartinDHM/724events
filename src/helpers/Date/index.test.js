/**
 * 
 */
import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
         // Cette ligne défini un test individuel qui vérifie la date par rapport au mois
        it("the function return janvier for 2022-01-01 as date", () => {
            
            expect(getMonth(new Date('2022-01-01'))).toBe('janvier');  // Cette ligne exécute la fonction getMonth avec la date "2022-01-01" et compare la valeur renvoyée avec la chaîne de caractères "janvier"
            
        // La fonction toBe de expect est employée avec l'expression .toBe('janvier') afin de vérifier que la valeur retournée par getMonth est strictement identique à la chaîne "janvier". 
        // En cas de différence, le test sera en échec.
          
        });
        it("the function return juillet for 2022-07-08 as date", () => {

            expect(getMonth(new Date('2022-07-08'))).toBe('juillet');
        });
    });
})

