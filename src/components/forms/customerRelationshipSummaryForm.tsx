import {type} from "os";
import { useRef } from "react";

const CustomerRelationshipSummaryFields = (props: any) => {

	
	return(
		<>
			<label>
				Customer ID: <input name="customerId" ref={props.customerIdRef}/>
			</label>
			<br />
			<label>
				TIN: <input name="tin" ref={props.tinRef}/>
			</label>
		
		</>
	);
};

const CustomerRelationshipSummaryForm = () => {
	const customerIdRef = useRef<HTMLInputElement>();
	const tinRef = useRef<HTMLInputElement>();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		if (!tinRef.current?.value && !customerIdRef.current?.value) {
			alert('At least one field is required.');
		} 
	};

	return(
		<form method="post" onSubmit={handleSubmit}>
			<CustomerRelationshipSummaryFields tinRef={tinRef} customerIdRef={customerIdRef}/>
			<br />
			<button type="reset">Reset</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default CustomerRelationshipSummaryForm;
