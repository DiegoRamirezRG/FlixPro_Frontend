import { ReactNode, useEffect, useRef } from 'react';
import './ModalStyle.scss';
import anime from 'animejs/lib/anime.es.js';

interface ModalProps{
    isOpen: boolean;
    onClose: any;
    children: ReactNode;
    centered: boolean;
    staticModal: boolean;
    modalSize: 'modal-sm' | 'modal-lg' | 'modal-xl';
}

export const ModalComp = ({ isOpen, onClose, children, centered, staticModal, modalSize } : ModalProps) => {

    const modalWrapper = useRef(null);
    const modalContent = useRef(null);

    useEffect(() => {
        if(isOpen){
            anime({
                targets: modalWrapper.current,
                opacity: [0, 1],
                duration: 300,
                easing: 'easeInOutQuad',
            });

            anime({
                targets: modalContent.current,
                translateY: ['-50px', '0px'],
                duration: 300,
                easing: 'easeOutQuad',
            });
        }
    }, [isOpen]);
    
    const staticAnimatioOut = () => {
        anime({
            targets: modalContent.current,
            scale: [1, 1.02],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
                anime({
                    targets: modalContent.current,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad',
                });
            }
        })
    }

    const closeModalAnimation = () => {
        anime({
            targets: modalContent.current,
            translateY: ['0px', '-50px'],
            duration: 300,
            easing: 'easeOutQuad',
        });

        anime({
            targets: modalWrapper.current,
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad',
            complete: () => {
                onClose()
            }
        });
    }
    
    return (
        <div className="modal-overlay" ref={modalWrapper} style={{ display: isOpen ? 'flex' : 'none', justifyContent: centered ? 'center' : 'start' }} onClick={ staticModal ? staticAnimatioOut : closeModalAnimation }>
            <div className={`modal ${modalSize}`} ref={modalContent} onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    )
}
