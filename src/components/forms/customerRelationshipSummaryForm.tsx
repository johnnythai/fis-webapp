import {type} from "os";
import { useRef } from "react";

const CustomerRelationshipSummaryFields = (props: any) => {

	
	return(
		<>
			<label>
				Customer ID: <input name="customerId" pattern="[0-9]*" maxLength={14} ref={props.customerIdRef}/>
			</label>
			<br />
			<label>
				Account Number: <input name="tin" type="number" maxLength={20} ref={props.accountNumberRef}/>
			</label>
		
		</>
	);
};

const CustomerRelationshipSummaryForm = () => {
	const customerIdRef = useRef<HTMLInputElement>();
	const accountNumberRef = useRef<HTMLInputElement>();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		if (!accountNumberRef.current?.value && !customerIdRef.current?.value) {
			alert('At least one field is required.');
		} 
	};

	return(
		<form method="post" onSubmit={handleSubmit}>
			<h4>Customer Relationship Summary</h4>
			<CustomerRelationshipSummaryFields accountNumberRef={accountNumberRef} customerIdRef={customerIdRef}/>
			<br />
			<button type="reset">Reset</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default CustomerRelationshipSummaryForm;
