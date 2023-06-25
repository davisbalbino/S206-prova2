package prova2.testesProva2;

import com.intuit.karate.junit5.Karate;

class InatelRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("prova2").relativeTo(getClass());
    }    

}