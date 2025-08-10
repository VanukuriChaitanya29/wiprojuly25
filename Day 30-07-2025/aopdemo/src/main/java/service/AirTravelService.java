package service;

import org.springframework.stereotype.Component;

import exception.NoSeatAvailableException;

@Component
public class AirTravelService {
	
	public void checkIn(Boolean flag) throws NoSeatAvailableException {
        System.out.println("Inside checkIn()");
        if (!flag) {
            throw new NoSeatAvailableException("No seat available!");
        }
        System.out.println("Check-in successful.");
    }

    public void collectBoardingPass() {
        System.out.println("Boarding pass collected.");
    }

    public void doSecurityCheck() {
        System.out.println("Security check completed.");
    }

    public void doBoarding() {
        System.out.println("Boarding completed.");
    }
}
