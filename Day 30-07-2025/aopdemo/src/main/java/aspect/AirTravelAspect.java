package aspect;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import exception.NoSeatAvailableException;
@Aspect
@Component
public class AirTravelAspect {

    @Before("execution(* com.wipro..*(..)")
    public void showPhotoId() {
        System.out.println("Please show your Photo ID.");
    }

    @Before("execution(* com.wipro.aopdemo.AirTravelProcess.doSecurityCheck(..)) || " +
            "execution(* com.wipro.aopdemo.AirTravelProcess.doBoarding(..))")
    public void showBoardingPass() {
        System.out.println("Please show your Boarding Pass.");
    }

    @AfterThrowing(pointcut = "execution(* com.wipro.aopdemo.AirTravelProcess.checkIn(..))", throwing = "ex")
    public void handleNoSeatAvailable(NoSeatAvailableException ex) {
        System.out.println("please collect to your airlines manager" );
    }
}
