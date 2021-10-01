export function checkSwitch() {
    console.log("Not yet implemented.");
}


/*
_this.$couponsList.on('change', '.ops-onoffswitch-checkbox', (e) => {
            e.preventDefault();

            let $this = $(e.currentTarget);
            let $listCoupon = $this.closest('.opc-coupons-list-coupon');

            let responsePromise = OPC_Coupon.enable(
                $listCoupon.data('coupon-id'),
                $listCoupon.data('coupon-enable-nonce'),
                $this.prop('checked')
            );
            responsePromise.then((response) => {
                if (response.success) {
                    $this.prop('checked', response.data.coupon.active);
                } else {
                    _this['showError']('Response Error', response.data.message);
                }
            }, (rejected) => {
                $this.prop('checked', false);
                if (rejected.responseJSON) {
                    _this['showError']('Error', rejected.responseJSON.data.message);
                } else {
                    _this['showError']('No Response', rejected);
                }
            });
        });
 */
