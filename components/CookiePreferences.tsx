'use client'

import React from "react"

export default function CookiePreferences() {
    //overlay modal

    return (
        <React.Fragment>
            <div
                onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>
                Cookies
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box"
                    style={{
                        fontFamily: 'var(--font-poppins)',
                        color: '#000000'
                    }}>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    
                    <p className="py-4">Manage your cookie preferences</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </React.Fragment>
    )
}