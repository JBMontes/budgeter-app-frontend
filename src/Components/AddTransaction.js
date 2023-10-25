function AddTransaction(){

    return(
<div className="addTransaction">
<h2>Add Transaction</h2>

<form>
        <div className="form">
        <label className='form-label'>Item Name:</label>
        <input type='text className="form-input'/>

        </div>
        <div className="form">
        <label className='form-label'>Amount:</label>
        <input type='text className="form-input'/>

        </div>
        <div className="form">
        <label className='form-label'>Date:</label>
        <input type='text className="form-input'/>

        </div>
        <div className="form">
        <label className='form-label'>From:</label>
        <input type='text className="form-input'/>

        </div>
       
        <div className="form">
        <label className='form-label'>Category:</label>
        <input type='text className="form-input'/>

        </div>
        <button type='submit' className='btn'>
            Submit
        </button>
    
</form>

</div>
    )
}

export default AddTransaction