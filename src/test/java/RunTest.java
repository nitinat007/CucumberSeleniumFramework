import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Author: nitinkumar
 * Created Date: 02/05/20
 * Info: Start Test from here
 **/

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty"}
        //,features = "src/test/resources/com.test/features/wikiSearch.feature"   //to run only listed feature put comma separated feature files
        ,tags = "@ScenarioTagWithDataTable"     //you can run tests based on tags on Scenarios or Features. You can put multiple tags separated by comma
)
public class RunTest {
}
