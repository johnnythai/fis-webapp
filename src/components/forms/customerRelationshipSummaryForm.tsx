import { useRef } from "react";
import {fetchApi} from "../../api/fetchApi";

const CustomerRelationshipSummaryFields = (props: any) => {

	
	return(
		<>
			<label>
				Customer ID: <input name="customerId" pattern="[0-9]*" maxLength={14} ref={props.customerIdRef}/>
			</label>
			<br />
			<label>
				Account Number: <input name="tin" pattern="[0-9]*"  maxLength={20} ref={props.accountNumberRef}/>
			</label>
		
		</>
	);
};

const CustomerRelationshipSummaryForm = (props: {horizonToken: string}) => {
	const customerIdRef = useRef<HTMLInputElement>();
	const accountNumberRef = useRef<HTMLInputElement>();

	const fetchCustomerId = () => {
		const applicationCode = 'DD';
		const accountNumber = accountNumberRef.current.value;
	
		const fetchOptions = {
			headers: {
				horizonToken: props.horizonToken,	
			},
		};

		const customerId = fetchApi(`/api/horizon/${applicationCode}/${accountNumber}`, fetchOptions);
		return customerId;
	};
	
	const fetchCustomerRelationshipSummary = async (formData: FormData) => {
		if (!customerIdRef.current?.value) {
			const customerId = await fetchCustomerId();
		} else {
			const customerId = customerIdRef.current.value;
		}

		const fetchOptions = {
			headers: {
				horizonToken: props.horizonToken,
			},
			body: JSON.stringify(formData)
		};
		
		const customerRelationshipSummary = await fetchApi(`/api/horizon/${customerId}/relationship-summary`, fetchOptions)
		console.log('CUSTOMER RELATIONSHIP SUMMARY: ', customerRelationshipSummary);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!accountNumberRef.current?.value && !customerIdRef.current?.value) {
			alert('At least one field is required.');
		} 

		const formData = new FormData(e.target);
		await fetchCustomerRelationshipSummary(formData);
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
