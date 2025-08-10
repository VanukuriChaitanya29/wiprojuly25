package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PAN")
public class PAN {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String panholderName;

    private String panNumber;

    // Getters and Setters

    
	public PAN(String panholderName, String panNumber) {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPanholderName() {
        return panholderName;
    }

    public void setPanholderName(String panholderName) {
        this.panholderName = panholderName;
    }

    public String getPanNumber() {
        return panNumber;
    }

    public void setPanNumber(String panNumber) {
        this.panNumber = panNumber;
    }

    // toString
    @Override
    public String toString() {
        return "PAN [id=" + id + ", panholderName=" + panholderName + ", panNumber=" + panNumber + "]";
    }

	public void setPanholderName(PAN pan) {
		// TODO Auto-generated method stub
		
	}

	public void setPanNumber(PAN pan) {
		// TODO Auto-generated method stub
		
	}
}
