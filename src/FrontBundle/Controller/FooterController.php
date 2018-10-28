<?php

namespace App\FrontBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FooterController extends AbstractController
{

    /**
     * @Route("/footer/about", name="footerAbout", methods={"POST"})
     * @return \Symfony\Component\HttpFoundation\Response
     */

    function footerAbout() {
        return $this->render('footer/about.html.twig');
    }

    /**
     * @Route("/footer/contact", name="footerContact", methods={"POST"})
     * @return \Symfony\Component\HttpFoundation\Response
     */

    function footerContact() {
        return $this->render('footer/contact.html.twig');
    }

    /**
     * @Route("/footer/donate", name="footerDonate", methods={"POST"})
     * @return \Symfony\Component\HttpFoundation\Response
     */

    function footerDonate() {
        return $this->render('footer/donate.html.twig');
    }

    /**
     * @Route("/footer/faq", name="footerFAQ", methods={"POST"})
     * @return \Symfony\Component\HttpFoundation\Response
     */

    function footerFAQ() {
        return $this->render('footer/faq.html.twig');
    }

    /**
     * @Route("/footer/legal", name="footerLegal", methods={"POST"})
     * @return \Symfony\Component\HttpFoundation\Response
     */

    function footerLegal() {
        return $this->render('footer/legal.html.twig');
    }

}