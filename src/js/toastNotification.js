import Swal from 'sweetalert2'
import  '../css/styles.css';

class ToastNotification {
    constructor() {
        // Initialize the SweetAlert2 mixin
        this.Toast = Swal.mixin({
            toast: true,
            position: 'center',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast',
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
    }

    // Method to show a toast notification
    show(icon, title) {
        this.Toast.fire({
            icon: icon, // 'success', 'error', 'warning', etc.
            title: title, // The message to display
        });
    
    }
}

export default new ToastNotification();