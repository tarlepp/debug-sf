<?php

namespace App\FrontBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController {

  /**
   * @Route("/", name="home")
   */

  public function homepage() {

      // session

      return $this->render('@FrontBundle/home/base.html.twig');
  }

}

?>